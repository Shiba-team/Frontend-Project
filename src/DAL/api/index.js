// Khi nào có API thì thay các promise bên dưới bằng fetch.

export function loginApi(email, password) {    
    const loginPromise = new Promise((resolve, reject) => {
        resolve({
        userId: email,
        loginToken: 'loginTokenOf: ' + password
        })
    })
    return loginPromise
}

export function getBucketIdApi(userId, loginToken){
    const getBucketPromise = new Promise((resolve, reject) => {
        resolve([
            userId + '-bucket1',
            userId + '-bucket2',
            userId + '-bucket3',
            userId + '-bucket4',
        ])
    })
    return getBucketPromise
}

export function getBucketInfoApi(userId, loginToken, bucketId){
    const getBacketInfoPromise = new Promise((resolve, reject) => {
        resolve({
            id: bucketId,
            name: bucketId + '-name',
            rootFolderId: bucketId + '-rootFolder'
        })
    })
    return getBacketInfoPromise
}

export function createBucketApi(userId, loginToken, bucketName){
    const createBucketPromise = new Promise((resolve, reject) => {
        resolve({
            bucketId: bucketName,
            bucketName: bucketName
        })
    })
    return createBucketPromise
}

export function getFolderContentApi(userId, loginToken, BucketId, folderId){
    const getFolderContentPromise = new Promise((resolve, reject) => {
        resolve({
            id: folderId,
            name: folderId,
            folderIds: [folderId + '-folder1',folderId +  '-folder2',folderId +  '-folder3'],
            objectIds: [folderId + '-file1',folderId +  '-file2',folderId +  '-file3']
        })
    })
    return getFolderContentPromise
}