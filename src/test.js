

//0 1 3
//0 2 3



// 1---0---3
//     |   |
// 2---6---4
//         |
//     7---5

let graph2 = [[1, 3, 6], [], [6], [4], [5], [7], [4], []];

// should return [[0, 3, 4, 5], [0, 1, 2, 6, 4, 5], [0, 6, 4, 5]]

// {
//     0: 1, 3, 6
//     2: 6
//     3: 4
//     4: 5
//     5: 7
//     6: 4
// }


let graph = [[1, 2], [3], [3], [4], []];

// 0---1
// |   |
// 2---3
//     |
//     4

// should return [[0, 1, 3], [0, 2, 3]]

// {
//     0: 1,2
//     1: 3
//     2: 3
//     3: 4
// }

function findPath(graph, curr = 0, path = []) {
    if(path.length < 1) {
        path.push(0);
    }

    if(graph[curr].length > 1) {
        for(let i = 0; i < graph[curr].length; i++) {
            if(path.includes(graph[curr][i]) || graph[curr][i] === graph.length - 1) {
                return path;
            } else {
                path.push(graph[curr][i]);
                findPath(graph, graph[curr][i], path);
            }
        }
    } else {
        if(path.includes(graph[curr]) || curr === graph.length - 1) {
            return path;
        } else {
            path.push(graph[curr]);
            findPath(graph, graph[curr], path);
        }
    }
}

findPath(graph);