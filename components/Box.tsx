import { twMerge } from 'tailwind-merge';

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BoxProps> = ({
    children,
    className
}) => {
    return ( 
        <div
            className={twMerge(`
                bg-neutral-900
                rounded-lg
                h-fit
                w-full
            `,
                className //enables to re-use Box component and to pass in additional classNames
            )}
        >
            {children}
        </div>
     );
}
 
export default Box;