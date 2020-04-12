<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Http\Repositories\MasterDataRepository;

class DataController extends ApiController
{
    //

    function __construct(MasterDataRepository $masterRepo)
    {
        $this->masterRepo = $masterRepo;
    }


    public function data()
    {
        $data = $this->masterRepo->data();

        if ($this->masterRepo->data(TRUE)) {
            return $this->sendResponse(0, 'Sukses', $data);
        } else {
            return $this->sendError(2, 'Error');
        }
    }

    public function createData(Request $request)
    {
        $save_data = $this->masterRepo->createData($request);

        if ($save_data) {
            return $this->sendResponse(0, "Berhasil");
        } else {
            return $this->sendError(2, 'Error');
        }
    }
}
