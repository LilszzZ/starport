import React, { memo } from 'react'
import { AliveScope } from '../KeepAlive/AliveScope'
//StarportContext作为顶层组件提供全局上下文后子组件使用
export const StarportContext = React.createContext<{
  metadata?: any
  setMetadata?: any
  proxyElArr?: any
  setProxyElArr?: any
  landedMap?: any
  setLandedMap?: any
}>({})
const Starport = memo((props: { children: any }) => {
  const { children } = props
  // 用来保存传递的props
  const [metadata, setMetadata] = React.useState<any>({})
  // 用来保存每个port对应的proxyElement
  const [proxyElArr, setProxyElArr] = React.useState<any>({})
  // 用来判断每个container是否落地
  const [landedMap, setLandedMap] = React.useState<any>({})

  return (
    <StarportContext.Provider
      value={{
        metadata,
        setMetadata,
        proxyElArr,
        setProxyElArr,
        landedMap,
        setLandedMap,
      }}
    >
      <AliveScope>{children} </AliveScope>
    </StarportContext.Provider>
  )
})

export default Starport
