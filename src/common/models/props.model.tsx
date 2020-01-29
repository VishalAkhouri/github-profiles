
// @ts-ignore

interface IProfileState {
}

interface IProfileProps {
    id: string;
    avatar_url?: string;
    name?: string;
    company?: string;
}

interface IProfilesProps {
    profiles: Array<IProfileProps>
}