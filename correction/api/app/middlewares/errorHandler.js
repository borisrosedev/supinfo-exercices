export default function(req, res){
    return res.status(400).json({ message: 'bad request'});
}