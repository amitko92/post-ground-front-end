import { useState } from "react";
import PostList from "../../components/Post/PostList";
import Page from "../../components/UI/Page/Page";
import Title from "../../components/Welcome/Title";

function WelcomePage(){

    const [data, setdata] = useState('this is my paragragh')

    const click = () => {
        setdata('einat choaand')
    }

    return (
        <Page>
            <Title />
            <PostList />
        </Page>
       
    );
}

export default WelcomePage