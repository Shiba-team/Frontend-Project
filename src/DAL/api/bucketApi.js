// Khi nào có API thì thay các promise bên dưới bằng fetch.

export function getUserBucketIdApi(userId, loginToken) {
    return new Promise((resolve, reject) => {
        resolve([
            userId + '-bucket1',
            userId + '-bucket2',
            userId + '-bucket3',
            userId + '-bucket4',
        ])
    })
}

export function getBucketInfoApi(userId, loginToken, bucketId) {
    return new Promise((resolve, reject) => {
        resolve({
            id: bucketId,
            name: bucketId + '-name',
            rootFolderId: bucketId + '-rootFolder'
        })
    })
}

export function createBucketApi(userId, loginToken, bucketName) {
    return new Promise((resolve, reject) => {
        resolve({
            id: bucketName,
            name: bucketName + '-name',
            rootFolderId: bucketName + '-rootFolder'
        })
    })
}

export function getFolderApi(userId, loginToken, BucketId, folderId) {
    return new Promise((resolve, reject) => {
        resolve({
            id: folderId,
            name: folderId,
            folderIds: [folderId + '-folder1', folderId + '-folder2', folderId + '-folder3'],
            fileIds: [folderId + '-file1', folderId + '-file2', folderId + '-file3']
        })
    })
}

export function getFileApi(userId, loginToken, BucketId, fileId) {
    return new Promise((resolve, reject) => {
        resolve({
            id: fileId,
            name: fileId + '-name',
            size: 100,
            lastModified: '1/1/2021',
            payload: null
        })
    })
}