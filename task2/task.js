const fs = require("fs");
const print = (message) => console.log(message);


function checkDir(path){
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, data) => {
            if (err) {
                print(err);
                return;
            }
            
            resolve({data});
        });
    });
}


function checkDirFlow(path, interval, files){
        setInterval(() => {
            fs.readdir(path, (err, data) => {
                if (err) {
                    print(err);
                    return;
                }

                let diff_add = data.filter(function(x) {
                    return files.indexOf(x) < 0;
                });

                let diff_delete = files.filter(function(x) {
                    return data.indexOf(x) < 0;
                });

                if (diff_add) {
                    diff_add.forEach(element => {
                        print(`Добавлен новый файл ${element}`);
                    });
                }

                if (diff_delete) {
                    diff_delete.forEach(element => {
                        print(`${element} удалён`);
                    });
                }

                files = data;
            });
        }, interval);
};


async function main(){
    const path = process.argv[2];   
    const interval = Number(process.argv[3]) * 1000;  

    let files = await checkDir(path);
    checkDirFlow(path, interval, files.data);
}


main();
