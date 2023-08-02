<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Pregunt;


class PreguntController extends Controller
{

     public function getAll(){
        $data = Pregunt::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['pregunta'] = $request['pregunta'];
        $data['complemento'] = $request['complemento'];
        $data['respuestaA'] = $request['respuestaA'];
        $data['respuestaB'] = $request['respuestaB'];
        $data['respuestaC'] = $request['respuestaC'];
        $data['seccion'] = $request['seccion'];
        Pregunt::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Pregunt::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Pregunt::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['pregunta'] = $request['pregunta'];
        $data['complemento'] = $request['complemento'];
        $data['respuestaA'] = $request['respuestaA'];
        $data['respuestaB'] = $request['respuestaB'];
        $data['respuestaC'] = $request['respuestaC'];
        $data['seccion'] = $request['seccion'];
        Pregunt::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
