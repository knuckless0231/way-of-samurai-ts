import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {Postdata, TsarType} from "../../Redux/state";
import Prepostcontent from "./Prepostcontent/Prepostcontent";
import PresentationMyPostComponent from "./MyPosts/PresentationMyPostComponent";


type PostDataType = {
    postData: Array<Postdata>
    textArreaText: string
    dispatch: (action: TsarType) => void
}


const Profile = (props: PostDataType) => {

    return <div>
        <Prepostcontent/>
        <PresentationMyPostComponent postData={props.postData}
                                     textArreaText={props.textArreaText}
                                     dispatch={props.dispatch}/>
        {/*<MyPosts*/}
        {/*    postData={props.postData}*/}
        {/*    textArreaText={props.textArreaText}*/}
        {/*    dispatch={props.dispatch}*/}
        {/*/>*/}

    </div>

}

export default Profile;