import Index from './container/index/reducer.js'
import Music from './container/music/reducer.js'
import Newest from './container/index/reducer/newest.js'
import Review from './container/index/reducer/review.js'
import Adopt from './container/selfInfor/reducer/adopt.js'
import Publish from './container/selfInfor/reducer/published.js'
const reducer = {
    Index,
    Music,
    Newest,
    Review,
    Adopt,
    Publish
}
export { reducer }