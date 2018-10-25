
//使用mockjs 提供 mock 数据接口

import Mock from 'mockjs'
import data from './data.json'

// 返回秒杀商品的接口
Mock.mock('/skProducts',{code:0,data:data.skProducts})
//返回 商品列表的接口
Mock.mock('/products',{code:0,data:data.products})
// 返回分类数据的接口
Mock.mock('/categorys',{code:0,data:data.categorys})

// 不需要向外暴露任何数据 只要保证执行一次就行
