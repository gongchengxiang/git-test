export default async function () {
    console.log('git-test');
    const test1 = 'branch:test1';
    console.log(test1);
    const test2 = 'branch:test2';
    console.log(test2);
    const testFetch = await fetch('https://www.baidu.com/');
    console.log(testFetch);
    const testFn = () => {
        return [1,2,3,4].map(e => {
            return e + '-test2';
        });1
    };2
    console.log('test rebase');3
    return testFn();
    111
}