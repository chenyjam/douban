import request from '@/utils/request'

export function getInTheaters() {
  return request({
    url: '/movie/in_theaters',
    method: 'get'
  })
}
