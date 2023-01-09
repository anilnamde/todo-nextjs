import styled from './layout.module.css'

export default function Layout({ children }) {
    return <div className={styled.container}>{children}</div>;
}
