<!--
 * @Description: Web project
 * @Version: 2.0
 * @Autor: Xu.wenqing
 * @Email: 2510129345@qq.com
 * @Date: 2020-08-09 00:51:33
 * @LastEditors: WenChing
 * @LastEditTime: 2020-08-10 01:44:06
-->
创建后端服务器
使用Koa2和MongoDB作为后端数据服务
创建文件夹
初始化文件夹
安装koa

Mongosse三大概念

schema ：用来定义表的模版，实现和MongoDB数据库的映射。用来实现每个字段的类型，长度，映射的字段，不具备表的操作能力。
model ：具备某张表操作能力的一个集合，是mongoose的核心能力。我们说的模型就是这个Mondel。
entity ：类似记录，由Model创建的实体，也具有影响数据库的操作能力。

其中：
  Schema中的数据类型
    String ：字符串类型
    Number ：数字类型
    Date ： 日期类型
    Boolean： 布尔类型
    Buffer ： NodeJS buffer 类型
    ObjectID ： 主键,一种特殊而且非常重要的类型
    Mixed ：混合类型
    Array ：集合类型