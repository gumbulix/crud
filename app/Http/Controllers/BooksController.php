<?php

namespace App\Http\Controllers;

use App\Books;
use Illuminate\Http\Request;

class BooksController extends Controller
{
    public function index()
    {
        $books = Books::all();

        return $books->jsonSerialize();
    }

    public function store(Request $request)
    {
        $book = Books::create($request->all());

        return $book->jsonSerialize();
    }

    public function show($id)
    {
        $book = Books::find($id);

        return $book->jsonSerialize();
    }

    public function update(Request $request, $id)
    {
        Books::find($id)->update($request->all());
    }

    public function destroy($id)
    {
        Books::destroy($id);
    }
}
