import { defHttp } from '/@/utils/http/axios'
import { LoginParams, LoginResultModel } from './model/userModel'

import { ErrorMessageMode } from '/#/axios'

enum Api {
  UserList = '/api/users',
}

/**
 * @description: user login api
 */
export function UserListApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<LoginResultModel>(
    {
      url: Api.UserList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  )
}
