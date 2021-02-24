<?php

namespace App\Http\Controllers;

use App\candidate;

use Illuminate\Http\Request;
use Validator;

class CandidateController extends Controller
{
    public function index()
    {
        $candidates = candidate::all();
        return $candidates;
    }
    public function store(request $request)

    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'surname' => 'required|string',
            'email' => 'nullable|email',
            'phone' => 'nullable|string',
            'date_interview' => 'nullable|date',
            'rating' => 'nullable|integer'
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(['success' => false, 'message' => $errors->all()]);
        }
        $candidate = new candidate;
        $candidate->name = $request->input('name');
        $candidate->surname = $request->input('surname');
        $candidate->email = $request->input('email');
        $candidate->phone = $request->input('phone');
        $candidate->date_interview = $request->input('date_interview');
        $candidate->rating = $request->input('rating');
        if (false === $candidate->save()) {
            return response()->json(['success' => false, 'message' => ['The candidate could not be created']], 400);
        } else {
            $this->_response = ['success' => true, 'message' => ['Candidate successfully registered'], 'data' => $candidate];
        }


        return response()->json($this->_response, 200);
    }
    public function show($id)
    {
        $candidate = candidate::find($id);
        if(null === $candidate)
        {
            return response()->json(['success' => false, 'message' => 'Candidate was not found.'], 404);
        } else {
            $this->_response = ['success' => true, 'message' => ['The Candidate was found'], 'data' => $candidate];
        }
        return response()->json($this->_response, 200);

    }
    public function update(request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer',
            'name' => 'string',
            'surname' => 'string',
            'email' => 'email',
            'phone' => 'string',
            'date_interview' => 'date',
            'rating' => 'integer'
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(['success' => false, 'message' => $errors->all()]);
        }
        $candidate = candidate::find($request->input('id'));
        $candidate->name = $request->input('name');
        $candidate->surname = $request->input('surname');
        $candidate->email = $request->input('email');
        $candidate->phone = $request->input('phone');
        $candidate->date_interview = $request->input('date_interview');
        $candidate->rating = $request->input('rating');
        if(false === $candidate->save())
        {
            return response()->json(['success' => false, 'message' => ['The candidate could not be updated']], 500);
        } else {
            $this->_response = ['success' => true, 'message' => ['Candidate successfully updated'], 'data' => $candidate];
        }
        return response()->json($this->_response, 200);
    }
    public function destroy($id)
    {
        $candidate = candidate::find($id);
        if(false === $candidate->delete())
        {
            return response()->json(['The candidate could not be deleted'], 500);
        } else {
            $this->_response = ['success' => true, 'message' => ['Candidate successfully deleted'], 'data' => $candidate];
        }
        return response()->json($this->_response, 200);
    }
}
