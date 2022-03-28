import * as React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

type ButtonProps = {
    repoOwner: string;
};

export const ButtonComponent: React.FC<ButtonProps> = ({ repoOwner }) => {
    const router = useRouter();
    const [repos, setRepos] = React.useState();

    const handleClickButton = React.useCallback(
        async (event: React.MouseEvent<HTMLElement>) => {
            const { data } = await axios.get(`https://api.github.com/orgs/${repoOwner}/repos`);
            console.log(data);
            setRepos(data);
            event.preventDefault();
        },
        [router],
    );

    const goTest = (e: React.MouseEvent<HTMLElement>) => {
        router.push('/teste');
        e.preventDefault();
    };

    return (
        <>
            <button onClick={handleClickButton}>Clique aqui para fetch com github</button>
            <p>{repos}</p>

            <button onClick={goTest}>Go to Test</button>
        </>
    );
};
