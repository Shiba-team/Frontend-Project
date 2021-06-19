import { createBucket, getFolder, getUserBuckets } from './../../src/BLL/bucketServices'

const sortBucket = (bucket1, bucket2) => {
    const bucket1Id = bucket1.id.toLowerCase()
    const bucket2Id = bucket2.id.toLowerCase()
    if (bucket1Id < bucket2Id) {
        return -1;
    }
    if (bucket1Id > bucket2Id) {
        return 1;
    }
    return 0;
}


test('test get user buckets', () => {

    const userInfo = {
        userId: '1234',
        loginToken: 'abcd'
    }

    const expectedResult = [
        {
            id: '1234-bucket1',
            name: '1234-bucket1-name',
            rootFolderId: '1234-bucket1-rootFolder'
        },
        {
            id: '1234-bucket2',
            name: '1234-bucket2-name',
            rootFolderId: '1234-bucket2-rootFolder'
        },
        {
            id: '1234-bucket3',
            name: '1234-bucket3-name',
            rootFolderId: '1234-bucket3-rootFolder'
        },
        {
            id: '1234-bucket4',
            name: '1234-bucket4-name',
            rootFolderId: '1234-bucket4-rootFolder'
        },
    ]

    getUserBuckets(userInfo)
        .then((buckets) => {
            expect(buckets.sort(sortBucket)).toStrictEqual(expectedResult.sort(sortBucket))
        })
        .catch((error) => {
            assert.isNotOk(error, 'Promise error')
            done()
        })
})

test('test create bucket', () => {
    const userInfo = {
        userId: '1234',
        loginToken: 'abcd'
    }

    const bucketName = 'bk'

    const expectedResult = {
        id: 'bk',
        name: 'bk-name',
        rootFolderId: 'bk-rootFolder'
    }

    return createBucket(userInfo, bucketName)
        .then((newBucket) => {
            expect(newBucket).toStrictEqual(expectedResult)
        })
})


test('test get folder', () => {
    const userInfo = {
        userId: '1234',
        loginToken: 'abcd'
    }

    return getFolder(userInfo, 'bucketId', 'rootFolderId')
        .then((result) => {
            expect(typeof result.id).toBe('string')
            expect(typeof result.name).toBe('string')
            expect(Array.isArray(result.folders)).toBeTruthy()
            expect(Array.isArray(result.folderIds)).toBeTruthy()
            expect(Array.isArray(result.files)).toBeTruthy()
            expect(Array.isArray(result.fileIds)).toBeTruthy()
            const file = result.files[0]
            expect(typeof file.id).toBe('string')
            expect(typeof file.name).toBe('string')
            expect(typeof file.lastModified).toBe('string')
        })
})
