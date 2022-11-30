// navigation.d.ts

import { StackPramsList } from '../routes/mainTab'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackPramsList {}
  }
}