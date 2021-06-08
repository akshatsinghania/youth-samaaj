import React, { useState, useEffect, useContext } from 'react'
import { GetData } from '../Assets/scripts/database'
import DiscussionTopic from '../Assets/Components/DiscussionTopic'
import AddPostButton from '../Assets/Components/Buttoncyberpunk'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import Loading from '../Assets/Components/LoadingBar'

function AllTopics() {
  const User = useContext(UserContext)

  const [AllTopics, setAllTopics] = useState([])
  const [DataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    GetData('alldiscussion').then((v) => {
      setDataLoaded(true)
      setAllTopics(Object.values(v))
    })
  }, [])

  return (
    <div className='alltopic'>
      <div className='alltopic_addtopic'>
        {User.User.admin ? (
          <Link to='/discussion/addtopic'>
            <AddPostButton text={'ADD TOPIC'} />
          </Link>
        ) : null}
      </div>
      <div className='alltopic_content'>
        {DataLoaded ? (
          <div>
            {AllTopics.map((v, i) => {
              return (
                <DiscussionTopic
                  key={i}
                  Title={v.Topic}
                  Body={v.Description}
                  Picture={v.Image}
                  Linkto={'/discussion/topic/' + v.Link}
                />
              )
            })}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}

export default AllTopics
