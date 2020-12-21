# csmf-preset

> vue脚手架创建本地项目模板

## 脚手架环境

1. 安装nodejs，新版本的nodejs已经集成了npm环境。
  
    > nodejs官网下载nodejs（12或者14版本） [nodejs官网](https://nodejs.org/zh-cn/) 下载长期支持版本(LTS)

2. 验证nodejs和npm版本

    > node -v
  
    > npm -v
 
3. 全局安装vue-cli（vue-cli4）

    > npm install -g @vue/cli

4. 查看vue-cli版本

    > vue --version


## 搭建本地项目开发环境

1. 从 GitHub repo 使用 preset

    > vue create --preset mach-mahe/csmf-preset xxx项目名

2. 本地环境搭建，将create-preset项目拉取到本地
    > vue create --preset ./csmf-preset(创建项目路径目录的相对路径)  xxx项目名
