import mongoose from 'mongoose';

const actividadesSchema=new mongoose.Schema({
  actividad:{
    type:String,
    required:true
  }
});

export const Actividades = mongoose.model('Actividades',actividadesSchema);