# 前端服务用centos系统配置

## 安装gcc等
  - yum -y install gcc make gcc-c++ openssl-devel wget

## 安装nginx
  - 安装nginx至 /usr/local/nginx
  - 配置 /usr/local/nginx/conf/nginx.conf
  - 配置用例如下

> upstream api_server {
>   server 127.0.0.1:3000;
> }

> server {
>   listen       80;
>   server_name  deltafx35c.com;
>   location /api/ {
>           proxy_pass http://api_server;
>           proxy_redirect off;
>           proxy_set_header X-Real-IP $remote_addr;
>           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
>    client_max_body_size 20m;
>   }
>   location / {
>    proxy_set_header Host $http_host;
>    root   /www/vue/vue-ts/dist;
>    try_files $uri $uri/ /index.html;
>   }
> }

## 安装git 
  - yum install -y git

## 安装nodeJs
  - cd /root
  - wget http://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-x64.tar.xz
  - tar -xvf node-v8.9.0-linux-x64.tar.xz
  - 修改/etc/profile文件，在export PATH的上一行添加如下内容：
    PATH=$PATH:/root/node-v8.9.0-linux-x64/bin
  - 保存后刷新文件 source /etc/profile
  - node -v
  
## 安装nodeJS全局第三方包
  - npm i n -g
  - npm i cnpm -g
  - cnpm i pm2 -g

## node版本升级及切换
  - 修改/etc/profile文件,在export PATH的上一行添加如下内容：
    export N_PREFIX=/usr/local/
    export PATH=$N_PREFIX/bin:$PATH
  - 保存后刷新文件 source /etc/profile
  - n stable
  - n 切换到最新版本
  - node -v
  