import styled from 'styled-components/native';

export const Container = styled.View`

`;

export const Header = styled.View`
align-items:center;
padding-bottom:20px;
border-bottom-width:1px;
border-color:#eee;
`;
export const Avatar = styled.Image`
width:100px;
height:100px;
border-radius:50px;
background:#eee



`;
export const Name = styled.Text`
font-size:20px;
font-weight:bold;
margin-top:10px;
text-align:center;
`;
export const Bio = styled.Text`
font-size:14px;
margin-right:10px;
margin-top:10px;
text-align:center;
color:#999;
`;
export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
margin-top:20px;
`;
export const Starred = styled.View`
background:#f5f5f5;
border-radius:4px;
padding:10px 15px;
margin-bottom:20px;
flex-direction:row;
align-items:center;

`;

export const OwnerAvatar = styled.Image`
height:42px;
width:42;
border-radius:21px;
background:#eee;
`;



export const Info = styled.View`
margin-left:10px;
flex:1;
`;

export const Title = styled.Text`
font-size:15px;
font-weight:bold;
color:#333
`;

export const Autor = styled.Text`
font-size:13px;
color:#666;
margin-top:2px`;
