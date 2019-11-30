import axios from 'axios'

export default {

    // Forum Api Calls
    submitForm: form => {
        
        return axios.post("/api/forum", form)
    },

    getForms: () => {
        return axios.get("/api/forum")
    },

    addComment : (id,comment) => {

        return axios.post(`/api/forum/comment/${id}`,comment)
    },

    deleteComment : id => {
    
    
        return axios.delete(`/api/forum/${id}`)
    },

    addLike : id => {
        return axios.put(`/api/forum/${id}`)
    },

    // Articles Api Calls
    searchArticles : () => {
        return axios.get('/api/articles')
    }


    
}