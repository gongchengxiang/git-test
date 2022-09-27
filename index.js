export default function () {
    console.log('git-test');
    const test1 = 'branch:test1';
    console.log(test1);
    const test2 = 'branch:test2';
    console.log(test2);
    const testFn = () => {
        return [1,2,3,4,5].map(e => {
            return e + '-test2';
        });
    };
    return testFn();
    // const 
}