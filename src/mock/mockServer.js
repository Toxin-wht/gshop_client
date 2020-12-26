 import Mock from 'mockjs'

 import recommends from './recommends.json'
 import floors from './floors.json'

 Mock.mock('/mock/recommends',{
     code:200,
     data:recommends
 })

 Mock.mock('/mock/floors',{
     code:200,
     data:floors
 })