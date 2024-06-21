import { withEditableResource } from "./withEditableResource";
import { withEditableUser } from "./withEditableUser";

//export const UserInfoForm = withEditableUser(({user, onChangeUser, onSaveUser, onResetUser}) => {
export const UserInfoForm = withEditableResource(({user, onChangeUser, onSaveUser, onResetUser}) => {
    const { name, age, hairColour } = user || {};
console.log(user)
    return user ? (
        //When info is changed the on change will change the user stat in withEditableUser - keeps it there and is then ready to send when post
        <>
            <label>Name</label>
            <input value={name} onChange={e => onChangeUser({name: e.target.value})} />
            <label>Age</label>
            <input value={age} onChange={e => onChangeUser({age: e.target.value})} />
            <label>HAir colour</label>
            <input value={hairColour} onChange={e => onChangeUser({hairColour: e.target.value})} />

            <button onClick={onSaveUser} >Save user</button>
            <button onClick={onResetUser}> Reset user</button>
        </>
    ) : <p>Loading....</p>
}, '/user/2', 'user');

