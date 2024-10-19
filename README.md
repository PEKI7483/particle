# particle
# 动态草坪粒子特效网页

## 项目简介

这是一个使用 Three.js 实现的动态交互网页，通过粒子特效模拟草坪的视觉效果。用户的鼠标移动或触摸操作会影响草坪的显示，视觉中心清晰可见，靠近页面边缘时呈现模糊和弥散效果。

**特点**：

- 不使用外部纹理图片，粒子的外观在着色器中程序化生成。
- 提高性能，增强可控性。

## 运行方法

1. 确保已下载所有项目文件，包括 `index.html`、`css`、`js`、`assets` 和 `libs` 文件夹。

2. 建议使用本地服务器运行项目，因为直接打开 `index.html` 可能会遇到跨域问题。您可以使用以下方法之一：

   - **使用 VSCode 的 Live Server 插件**：

     - 安装 Live Server 插件。
     - 在 VSCode 中打开项目文件夹。
     - 右键点击 `index.html`，选择 "Open with Live Server"。

   - **使用 Node.js 的 http-server**：

     - 安装 http-server：`npm install -g http-server`
     - 在项目根目录运行：`http-server`
     - 在浏览器中访问提供的本地地址。

3. 在浏览器中查看效果，移动鼠标或触摸屏幕，体验草坪的动态变化。

## 项目结构

- **index.html**：主入口文件，包含着色器脚本和主脚本引入。
- **css/styles.css**：页面样式文件。
- **js**：JavaScript 脚本文件。
  - **main.js**：主脚本，初始化场景和启动动画。
  - **scene.js**：创建 Three.js 场景、相机和渲染器。
  - **particles.js**：创建粒子系统，模拟草坪效果。
  - **interactions.js**：处理用户交互。
  - **utils.js**：辅助函数（当前为空，可根据需要添加）。
- **assets**：资源文件。
  - **shaders**：GLSL 着色器文件。
    - **particleVertex.glsl**：顶点着色器。
    - **particleFragment.glsl**：片元着色器。
- **libs**：第三方库。
  - **three.min.js**：Three.js 库文件。

## 许可证

本项目使用 MIT 许可证。

