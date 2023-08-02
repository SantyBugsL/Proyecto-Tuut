<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Listening;

class ListeningController extends Controller
{
    public function getAll(){$data = Listening::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['pregunta'] = $request['pregunta'];
        $data['complemento'] = $request['complemento'];
        $data['respuestaA'] = $request['respuestaA'];
        $data['respuestaB'] = $request['respuestaB'];
        $data['respuestaC'] = $request['respuestaC'];
        $data['respuestaD'] = $request['respuestaD'];
        $data['seccion'] = $request['seccion'];
        Listening::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){$res = Listening::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){$data = Listening::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['pregunta'] = $request['pregunta'];
        $data['complemento'] = $request['complemento'];
        $data['respuestaA'] = $request['respuestaA'];
        $data['respuestaB'] = $request['respuestaB'];
        $data['respuestaC'] = $request['respuestaC'];
        $data['respuestaD'] = $request['respuestaD'];
        $data['seccion'] = $request['seccion'];
        Listening::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
