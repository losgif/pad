---
slug: build-docker-image-in-docker-with-gitlab-ci.html
title: 通过Gitlab CI构建Docker镜像
author: losgif
author_title: 前端开发者
author_url: https://github.com/losgif
author_image_url: https://avatars.githubusercontent.com/u/13404752?v=4
tags: [Docker, Gitlab CI, dind, Docker Image]
---

## 前情提要
Gitlab CI 环境一般有：docker, shell。本文讨论在docker运行环境中如何再次构建Docker镜像。  
有点先有鸡还是先有蛋的意思，所以docker的解决方案是`dind`。

> `dind` 指的是 Docker in Docker，一种在docker容器内使用docker的方法

## 构建
首先看下文件结构
```shell
$ tree     
.
├── .gitlab-ci.yml
└── Dockerfile

0 directories, 3 files

```

### Dockerfile
不必多说，docker构建镜像必备文件

### .gitlab-ci.yml
gitlab ci 配置文件

直接看下配置文件

```dockerfile
# This file is a template, and might need editing before it works on your project.
build:
  tags:
    - docker-ci-runner
  # Official docker image.
  image: docker:latest
  services:
    - docker:dind
  before_script:
    - docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" $CI_REGISTRY
  script:
    - docker build --tag "$CI_REGISTRY_IMAGE:$CI_COMMIT_TAG" .
    - docker push "$CI_REGISTRY_IMAGE:$CI_COMMIT_TAG"
  only:
    # 仅运行在添加标签时
    - tags

```
前置知识需要了解 .gitlab-ci.yml 配置  
文档可以查看[这里](https://docs.gitlab.com/ee/ci/yaml/index.html)  
内容很简单，声明image、tags、script、only、services  
主要关注services内声明使用了docker:dind，借此可以完成docker容器 内构建docker 镜像。

```shell
docker build --tag "$CI_REGISTRY_IMAGE:$CI_COMMIT_TAG" .
```
此命令完成了构建镜像任务，且使用git标签名作为镜像标签。

## 推送
```shell
docker push "$CI_REGISTRY_IMAGE:$CI_COMMIT_TAG"
```
Gitlab CE版本也是支持docker镜像库的，上面的配置可以完成推送至镜像库。  
至此完成了镜像构建和推送。
