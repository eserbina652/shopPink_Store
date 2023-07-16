import React from 'react';
import {
  AdditionalInfoWrap,
  ProfileWrapper,
  UserAdditionalInform,
  UserFont,
  UserImage,
  UserInformationWrapper,
  UserMainInfo
} from "../index";
import {PrimaryFont, SecondaryFont} from "../../../styles";
import SearchUsers from "../../../components/search/users/SearchUsers";
import {IUser} from "../types";

interface IUserInfo {
    userInfo: IUser
  isUserPage?: boolean
}

const UserInfo = ({userInfo, isUserPage=true}: IUserInfo) => {
  return (
    <ProfileWrapper>
      <UserInformationWrapper>
        <UserMainInfo>
          <PrimaryFont padding='0 0 30px 0'>Username: {userInfo.username}</PrimaryFont>
          <UserImage src={userInfo.image}/>
          <div style={{paddingTop: '20px'}}>
            <UserFont>First name: {userInfo.firstName}</UserFont>
            <UserFont>Last name: {userInfo.lastName}</UserFont>
            <UserFont>Age: {userInfo.age}</UserFont>
            <UserFont>Gender: {userInfo.gender}</UserFont>
            <UserFont>Phone number: {userInfo.phone}</UserFont>
            <UserFont>E-mail: {userInfo.email}</UserFont>
            <UserFont>Date of birth: {userInfo.birthDate}</UserFont>
            <UserFont>University: {userInfo.university}</UserFont>
            <UserFont>Current position: {userInfo.company.title}</UserFont>
          </div>
        </UserMainInfo>
        <AdditionalInfoWrap>
          <PrimaryFont>Additional information</PrimaryFont>
          <div style={{textAlign: 'center'}}>
            <SecondaryFont>Address</SecondaryFont>
            <UserAdditionalInform>
              <UserFont>Address: {userInfo.address.address}</UserFont>
              <UserFont>City&Postal code: {userInfo.address.city} {userInfo.address.postalCode}</UserFont>
              <UserFont>State: {userInfo.address.state}</UserFont>
            </UserAdditionalInform>
          </div>
          <div style={{textAlign: 'center'}}>
            <SecondaryFont>Current work</SecondaryFont>
            <UserAdditionalInform>
              <UserFont>Address: {userInfo.company.address.address}</UserFont>
              <UserFont>City&Postal
                code: {userInfo.company.address.city} {userInfo.company.address.postalCode}</UserFont>
              <UserFont>State: {userInfo.company.address.state}</UserFont>
              <UserFont>Company name: {userInfo.company.name}</UserFont>
              <UserFont>Company department: {userInfo.company.department}</UserFont>
            </UserAdditionalInform>
          </div>
        </AdditionalInfoWrap>
      </UserInformationWrapper>
      {isUserPage&&<SearchUsers/>}
    </ProfileWrapper>
  );
};

export default UserInfo;
