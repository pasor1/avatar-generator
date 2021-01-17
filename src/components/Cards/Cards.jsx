import Card from './Card/Card';

const Cards = props => (
  <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-items-stretch">
    { 
      props.users.map(user => (
        <Card key={user.id} username={user.username} avatarType={user.avatarType} />
      ))
    }
  </div>
)

export default Cards;