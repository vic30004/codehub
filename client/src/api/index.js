import axios from 'axios'

export default {

    submitForm: form => {
        
        return axios.post("/api/form", form)
    },

    getForms: () => {
        return axios.get("/api/form")
    },

    addComment : (id,comment) => {

        return axios.post(`/api/form/${id}`,comment)
    },

    deleteComment : id => {
    
    
        return axios.delete(`/api/form/${id}`)
    },

    addLike : id => {
        return axios.put(`/api/form/${id}`)
    }
    
}