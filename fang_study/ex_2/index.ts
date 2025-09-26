// VALID MOUNTAIN ARRAY
function ValidMountainArray(A: number[]): boolean {
    let i = 1;

    while (i < A.length && A[i] > A[i - 1]) {
        i++;
    }

    if (i === 1 || i === A.length) {
        return false;

    }

    while (i < A.length && A[i] < A[i - 1]) {
        i++;
    }

    return i === A.length;


}