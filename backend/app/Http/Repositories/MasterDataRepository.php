<?php

namespace App\Http\Repositories;

use Illuminate\Support\Facades\DB;
class MasterDataRepository
{
    function __construct()
    {

    }

    public function data($exists = FALSE)
    {
        $param = array(
            'table' => 'data',
            'select' => array('id as id', 'data_name as name', 'data_info as info'),
        );

        return $this->getTable($param, $exists);
    }


    public function createData($request)
    {
        $new_data = DB::table('data')
        ->insert(
            [
            'data_name' => $request->data_name,
            'data_info' => $request->data_info,
            ]
        );

        return $new_data;
    }



    public function getTable($param = array(), $exists = FALSE)
    {
        $result = DB::table($param['table'])
            ->select($param['select']);

        if (isset($param['condition']['key']) && isset($param['condition']['value'])) {
            $result->where($param['condition']['key'], $param['condition']['value']);
        }

        if ($exists === TRUE) {
            return $result->exists();
        }else {
            return $result->get();
        }
    }
}
