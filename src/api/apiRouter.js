import $http from '@/api/index';
export const ubussiteinfo  = () =>{ return $http.get('/admin/ubussiteinfo/info')}

