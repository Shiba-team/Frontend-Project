import { getFolderContentApi } from '../DAL/api'
import {
    getUserBucketIdApi,
    getBucketInfoApi,
    createBucketApi,
    getFolderApi,
    getFileApi
} from '../DAL/api/bucketApi'


export function getUserBuckets(userInfo) {
    return new Promise((resolve, reject) => {
        getUserBucketIdApi(userInfo.userId, userInfo.loginToken)
            .then((bucketId) => {
                const getBucketPromise = bucketId.map((id) => (getBucketInfoApi(
                    userInfo.userId,
                    userInfo.loginToken,
                    id
                )))

                Promise.all(getBucketPromise)
                    .then((data) => {
                        resolve(data)
                    })
            })
    })
}

export function getFolder(userInfo, bucketId, folderId) {
    return new Promise((resolve, reject) => {
        getFolderApi(userInfo.userId, userInfo.loginToken, bucketId, folderId)
            .then((resultFolder) => {
                const folderPromise = resultFolder.folderIds.map((id) => (
                    getFolderApi(userInfo.userId, userInfo.loginToken, bucketId, id)
                ))
                const filePromise = resultFolder.fileIds.map((id) => (
                    getFileApi(userInfo.userId, userInfo.loginToken, bucketId, id)
                ))
                Promise.all([...folderPromise, ...filePromise])
                    .then((result) => {
                        const folders = result.filter((item) => item.payload === undefined)
                        const files = result.filter((item) => item.payload !== undefined)

                        resolve({
                            ...resultFolder,
                            folders: folders,
                            files: files
                        })
                    })
            })
    })
}

export function createBucket(userInfo, bucketName) {
    return createBucketApi(userInfo.userId, userInfo.loginToken, bucketName)
}