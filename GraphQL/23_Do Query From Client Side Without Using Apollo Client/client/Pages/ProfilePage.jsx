
export const ProfilePage = () => {
    
    return (
        <div className="container myContainer">
            <div className="center-align">
                <img style={{ border: "2px solid", marginTop: "10px"}} className="circle" src="https://robohash.org/user.png?size=200x200" alt="Pic" />
                <h5>User1 Text1</h5>
                <h6>user1.text1@example.com</h6>
            </div>
            <h3>Your Comments</h3>


            <blockquote>
                <h6>If it works don't touch it</h6>
            </blockquote>
            <blockquote>
                <h6>If it works don't touch it</h6>
            </blockquote>
        </div>
    )
}