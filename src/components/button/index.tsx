import * as C from './styles';

type Props = {
    label: string;
    icon: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Button = ({label, icon, onClick}: Props) => {
    return (
        <C.Container>
            <C.IconArear>
                <C.Icon src={icon} />
            </C.IconArear>
            <C.Label onClick={onClick}>{label}</C.Label>
        </C.Container>
    );
}