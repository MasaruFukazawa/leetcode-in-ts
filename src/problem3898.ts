export function findDegrees(matrix: number[][]): number[] {

    if (matrix.length <= 1) {
        return [0]
    }

    const n = matrix.length;
    const ans: number[] = new Array(n).fill(0);
    const targetIds = Array.from({ length: matrix.length }, (_, i) => i);

    for (let i in targetIds) {

        let degree: number = 0;

        for (let j in targetIds) {

            if (i == j) continue;

            if (matrix[i]![j] == 1) {
                degree += 1;
            }

            ans[i]! = degree;

        }
    }

    return ans;
};