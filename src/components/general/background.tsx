import { ReactNode } from "react";

export const Background = ({children}: {children: ReactNode}) => {
    return (
        <div style={{
            background: 'linear-gradient(44deg,rgba(137, 98, 163, 1) 0%, rgba(242, 92, 92, 1) 50%, rgba(242, 182, 97, 1) 100%)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh'
        }}>
            {children}
        </div>
    );
}