import Mock from 'mockjs'

const template = {
    'key|1-10': '★'
}
Mock.mock("/user",Mock.toJSONSchema(template)) 
