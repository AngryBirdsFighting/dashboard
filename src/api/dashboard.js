import request from '@/utils/request'

export function getArea() {
  debugger
  return request({
    url: '../../area.json',
    method: 'get'
  })
}
