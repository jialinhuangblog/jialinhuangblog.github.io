/// <reference types="@emotion/react/types/css-prop" />

/**
 * For the balance between typing coverage and productivity, the any should be traded off and may
 * get fixes in future
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type AnyFIXME = any

/** E.g. `'2020-12-08T10:21:58.57+00:00'` */
declare type ISO8601 = string

/**
 * Sometimes we do need to declare the type of any in explicit. So this type here it's to be avoid
 * the 「eslint」 going complain.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type AnyExplicit = any

/** Unwrap the value inside of a promise */
declare type Await<T> = T extends Promise<infer U> ? U : T

declare type ParametersHead<T> = Parameters<T>[0]

/**
 * 「React.PropsWithChildren」 的別名
 *
 * 並且同時具有將 emotion 的 css prop 轉換為 props.className?: string 的型別
 *
 * @example <caption>最簡使用</caption>
 *   export const MyComponent = memo(function MyComponent(props: ReactProps) {
 *     return <div className={props.className}>{props.childred}</div>
 *   })
 *
 * @example <caption>加入其它客製 props</caption>
 *   type MyProps = { foo: boolean }
 *
 *   export const MyComponent: ReactProps<MyProps> = memo(function MyComponent(props) {
 *     console.info(props.foo)
 *
 *     return <div data-foo={props.foo}>{props.childred}</div>
 *   })
 */
declare type ReactProps<P extends Record<string | symbol, unknown> = CssPropAsClassName> =
  React.PropsWithChildren<P & CssPropAsClassName>

/** 與「ReactProps」相同，但「props.children」是必要傳入 */
declare type ReactPropsRequiredChildren<
  P extends Record<string | symbol, unknown> = CssPropAsClassName,
> = import('type-fest').SetRequired<React.PropsWithChildren<P & CssPropAsClassName>, 'children'>


/** 「ReactProps」的別名，但沒有「prop.children」取而代之「renderProps」模式 */
declare type ReactPropsRequiredComponent<
  PropsOfRender extends
    | Record<string | symbol, unknown>
    | undefined = PropsOfRender extends undefined ? void : PropsOfRender,
> = {
  component: React.ElementType<ReactProps<PropsOfRender>>
}

type CssPropAsClassName = {
  /** 當你為組件添加 `css={css``}` 時，在該組件的實作中，emotion 會將 `css` 轉為 `className` 作為 props 傳入 */
  className?: string
}

type RepeatString<S extends string, N extends number> = N extends 1
  ? S
  : `${S}${RepeatString<S, [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10][N]>}`

/**
 * @example <caption>單一參數使用</caption>
 *   // 定義 hook 之 typing
 *   const useHook: Arguments<[number, string]> = (arg1: number) => {
 *     return 'I am string'
 *   }
 *
 *   // 在組件內使用上述 hook
 *   const TestComponent: React.FC = props => {
 *     // 該 hook 即被限制必須吻合 typing coverage
 *     const foo: string = useHook(123, '123')
 *
 *     return <div></div>
 *   }
 */
type HookFunction<Arguments extends any[] = [], ReturnValue = any> = {
  (...args: Arguments): ReturnValue
}
