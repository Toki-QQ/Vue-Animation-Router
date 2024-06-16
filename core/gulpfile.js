import { src, dest, series, parallel, task } from "gulp";
import autoprefixer from "gulp-autoprefixer";
import { resolve } from "path";

//获取文件真实路径
function pathResolve(dir) {
  return resolve(process.cwd(), ".", dir);
}

/**
 * 拷贝components的css文件到构建后的文件中
 * copy components' css files to es folder and lib folder
 */
task("copy-components-style", () => {
  return src(pathResolve("src/components/**/**.css"))
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(dest(pathResolve(`./es/components`)))
    .pipe(dest(pathResolve(`./lib/components`)));
});

/**
 * 拷贝view的css文件到构建后的文件中
 * copy view's css files to es folder and lib folder
 */
task("copy-view-style", () => {
  return src(pathResolve("src/utils/view/style/**.css"))
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(dest(pathResolve(`./es/utils/view/style`)))
    .pipe(dest(pathResolve(`./lib/utils/view/style`)));
});

// 生成构建任务
// generate build tasks
export default series(parallel("copy-components-style", "copy-view-style"));
