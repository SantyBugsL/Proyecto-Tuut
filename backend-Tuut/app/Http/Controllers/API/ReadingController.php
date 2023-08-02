<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Reading;

class ReadingController extends Controller
{
    public function getAll(){$data = Reading::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['pregunta'] = $request['pregunta'];
        $data['respuestaA'] = $request['respuestaA'];
        $data['respuestaB'] = $request['respuestaB'];
        $data['respuestaC'] = $request['respuestaC'];
        $data['respuestaD'] = $request['respuestaD'];
        $data['seccion'] = $request['seccion'];
        Reading::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){$res = Reading::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){$data = Reading::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['pregunta'] = $request['pregunta'];
        $data['respuestaA'] = $request['respuestaA'];
        $data['respuestaB'] = $request['respuestaB'];
        $data['respuestaC'] = $request['respuestaC'];
        $data['respuestaD'] = $request['respuestaD'];
        $data['seccion'] = $request['seccion'];
        Reading::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
