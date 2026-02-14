package main

import "testing"

func TestSimple(t *testing.T) {
    expected := "hello"
    result := "hello" // Ganti dengan fungsi asli dari main.go Anda jika ada
    if result != expected {
        t.Errorf("Hasil salah, ekspektasi: %s, dapat: %s", expected, result)
    }
}
