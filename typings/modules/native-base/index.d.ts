/// <reference types="react" />

declare namespace NativeBase {
  interface ContainerProps extends React.Props<Container> { }
  export class Container extends React.Component<ContainerProps, {}> { }

  interface HeaderProps extends React.Props<Header> { }
  export class Header extends React.Component<HeaderProps, {}> { }

  interface TitleProps extends React.Props<Title> { }
  export class Title extends React.Component<TitleProps, {}> { }

  interface ContentProps extends React.Props<Content> { }
  export class Content extends React.Component<ContentProps, {}> { }

  interface FooterProps extends React.Props<Footer> { }
  export class Footer extends React.Component<FooterProps, {}> { }

  interface ButtonProps extends React.Props<Button> {
    transparent?: boolean
    capitalize?: boolean
    active?: boolean
  }
  export class Button extends React.Component<ButtonProps, {}> { }

  interface IconProps extends React.Props<Icon> {
    name: string
  }
  export class Icon extends React.Component<IconProps, {}> { }

  interface FooterTabProps extends React.Props<FooterTab> { }
  export class FooterTab extends React.Component<FooterTabProps, {}> { }

  interface BadgeProps extends React.Props<Badge> { }
  export class Badge extends React.Component<BadgeProps, {}> { }
}

declare module "native-base" {
  export import Container = NativeBase.Container
  export import Header = NativeBase.Header
  export import Title = NativeBase.Title
  export import Content = NativeBase.Content
  export import Footer = NativeBase.Footer
  export import Button = NativeBase.Button
  export import Icon = NativeBase.Icon
  export import FooterTab = NativeBase.FooterTab
  export import Badge = NativeBase.Badge
}